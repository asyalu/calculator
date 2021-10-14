export const PLUS_MEMORY = 'PLUS_MEMORY';
export const MINUS_MEMORY = 'MINUS_MEMORY';
export const RESET_MEMORY = 'RESET_MEMORY';

export const plusMemoryAction = (number) => ({
  type: PLUS_MEMORY,
  number,
});

export const minusMemoryAction = (number) => ({
  type: MINUS_MEMORY,
  number,
});

export const resetMemryAction = () => ({
  type: RESET_MEMORY,
});
