import { useAbout } from "../hooks/useAbout"

export default function About() {
  const {about} = useAbout();
  return (
    <div>{about}</div>
  )
}
