import Box from "@wanner.work/box";

interface Props {
  title: string;
  description?: string;
}

export default function Page ({title, description }: Readonly<Props>) {
  return <Box width="small">
    <h1>
      {title}
    </h1>
    {description && <p>
      {description}
    </p>}
  </Box>
}