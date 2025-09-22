export const Mark = ({ children }: { children: string }) => (
  <>{children}<sup aria-hidden="true">™</sup></>
);

export default Mark;