type ReactExampleProps = {
  label?: string;
};

export default function ReactExample({ label = "React est prêt" }: ReactExampleProps) {
  return <span>{label}</span>;
}
