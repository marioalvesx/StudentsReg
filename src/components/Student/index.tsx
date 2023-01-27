type StudentProps = {
  title: string;
}

export default function Student({ title }: StudentProps ) {
  return (
    <div>{ title }</div>
  )
}