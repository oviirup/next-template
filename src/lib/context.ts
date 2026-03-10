"use client";

import { createContext, createElement, use } from "react";

/**
 * Creates a base context with a given name and initial value
 * @param name The name of the context, in pascal case
 * @param initial The initial value of the context
 * @returns A tuple containing the Provider and useContext hooks
 */
export function createBaseContext<T>(name: string, initial: T) {
  const Context = createContext(initial);
  // Provider component
  const Provider: React.FC<React.PropsWithChildren<{ value: T }>> = ({
    children,
    value,
  }) => createElement(Context.Provider, { value }, children);
  Provider.displayName = `${name}Provider`;
  // useContext hook
  const useContext = () => {
    const ctx = use(Context);
    if (ctx) return ctx;
    throw new Error(`use${name} must be used inside ${name}Provider`);
  };
  useContext.displayName = `use${name}`;
  return { Provider, useContext } as const;
}
