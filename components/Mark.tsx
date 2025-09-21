export const Mark = ({ children }: { children: string }) => (
  <>
    {children}
    <sup aria-hidden="true" style={{ fontSize: '0.6em', verticalAlign: 'super' }}>
      ™
    </sup>
  </>
);

export default Mark;