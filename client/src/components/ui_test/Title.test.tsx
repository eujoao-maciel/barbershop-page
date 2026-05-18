import { render, screen } from  "@testing-library/react";
import { Title } from "../ui/Title.tsx"

describe('Title', () => {
  it('renders the title text', () => {
    render(<Title title='Services'/>)
    const heading = screen.getByRole("heading", {name: "Services"})
    expect(heading).toBeInTheDocument()
  })
})
