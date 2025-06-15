'use server';

/**
 * @fileOverview A flow for suggesting UI component combinations, generating new components, or suggesting code edits.
 *
 * - suggestComponentCombinations - A function that handles UI suggestions, creation, or edits.
 * - SuggestUiInput - The input type for the suggestUiChanges function.
 * - SuggestUiOutput - The return type for the suggestUiChanges function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestUiInputSchema = z.object({
  needs: z.string().describe('The specific needs, requirements for the UI, or request to create/edit a component.'),
  existingComponentContext: z
    .string()
    .optional()
    .describe('The context or code of an existing component, if the request is to edit it.'),
});
export type SuggestUiInput = z.infer<
  typeof SuggestUiInputSchema
>;

const SuggestUiOutputSchema = z.object({
  suggestionType: z.enum(['combination', 'creation', 'edit']).describe("The type of suggestion provided: 'combination', 'creation', or 'edit'."),
  suggestedCombinations: z
    .array(z.string())
    .optional()
    .describe('An array of suggested UI component combinations, if applicable.'),
  generatedCode: z
    .string()
    .optional()
    .describe('The generated code snippet for a new component or a modified component, if applicable. This should be complete, valid, and ready-to-use React/Next.js code using TypeScript and ShadCN/Tailwind if appropriate.'),
  fileNameSuggestion: z
    .string()
    .optional()
    .describe('A suggested file name for the generated code (e.g., my-new-component.tsx), if applicable.'),
  reasoning: z.string().describe('The AI reasoning behind the suggestions or generated code.'),
});
export type SuggestUiOutput = z.infer<
  typeof SuggestUiOutputSchema
>;

export async function suggestUiChanges( // Renamed for clarity
  input: SuggestUiInput
): Promise<SuggestUiOutput> {
  return suggestUiFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestUiPrompt',
  input: {schema: SuggestUiInputSchema},
  output: {schema: SuggestUiOutputSchema},
  prompt: `You are an AI assistant that helps developers with their Next.js and React projects using ShadCN UI components and Tailwind CSS.
  Based on the user's needs and any existing component context, you can:
  1. Suggest UI component combinations (set suggestionType to 'combination').
  2. Generate code for a new component (set suggestionType to 'creation', provide code in 'generatedCode', and optionally a 'fileNameSuggestion').
  3. Suggest modifications to existing component code (set suggestionType to 'edit', provide the new full code in 'generatedCode', and reference the original context in 'reasoning').

  User Needs: {{{needs}}}
  Existing Component Context (if any): {{{existingComponentContext}}}

  Instructions:
  - If the user asks for component combinations, provide them in 'suggestedCombinations'.
  - If the user asks to create a new component, generate the full, ready-to-use TypeScript code for that React component. Use ShadCN UI components and Tailwind CSS where appropriate. Put this code in the 'generatedCode' field. If relevant, suggest a filename in 'fileNameSuggestion'.
  - If the user provides existing code and asks for edits, provide the complete modified code in the 'generatedCode' field.
  - Always provide a clear 'reasoning' for your response.
  - Ensure any generated code is for Next.js (App Router) and React, using TypeScript.
  - Do not add comments to the generated code unless they are standard JSDoc comments for props or major functions.

  Format your response as a JSON object adhering to the output schema.
  `,
});

const suggestUiFlow = ai.defineFlow(
  {
    name: 'suggestUiFlow',
    inputSchema: SuggestUiInputSchema,
    outputSchema: SuggestUiOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error("AI did not return a valid output.");
    }
    // Ensure that if generatedCode is provided, suggestionType is 'creation' or 'edit'.
    // And if suggestedCombinations are provided, suggestionType is 'combination'.
    // This is a basic validation, more complex logic can be added if needed.
    if (output.generatedCode && !['creation', 'edit'].includes(output.suggestionType)) {
      output.suggestionType = output.existingComponentContext ? 'edit' : 'creation';
    } else if (output.suggestedCombinations && output.suggestedCombinations.length > 0 && output.suggestionType !== 'combination') {
      output.suggestionType = 'combination';
    } else if (!output.suggestionType) {
      // Fallback if AI doesn't set it clearly
      if (output.generatedCode) {
        output.suggestionType = output.existingComponentContext ? 'edit' : 'creation';
      } else {
        output.suggestionType = 'combination';
      }
    }
    return output;
  }
);

// For backward compatibility if anything still uses the old name
export const suggestComponentCombinations = suggestUiChanges;
export type SuggestComponentCombinationsInput = SuggestUiInput;
export type SuggestComponentCombinationsOutput = SuggestUiOutput;
