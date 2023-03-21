import {render, screen} from '@testing-library/react'
import Button from "./Button"

test ('should render without error', ()=> {
    render(<Button>test</Button>)
})

test ('Should match snapshot without props', () => {
    render(<Button>test</Button>)
    expect(screen.getByRole('button')).toMatchSnapshot()
})

test ('Should match snapshot success props', () => {
    render(<Button success>test</Button>)
    expect(screen.getByRole('button')).toMatchSnapshot()
})

test ('Should match snapshot info props', () => {
    render(<Button info>test</Button>)
    expect(screen.getByRole('button')).toMatchSnapshot()
})

test ('Should match snapshot error props', () => {
    render(<Button error>test</Button>)
    expect(screen.getByRole('button')).toMatchSnapshot()
})

test ('Should match snapshot warning props', () => {
    render(<Button warning>test</Button>)
    expect(screen.getByRole('button')).toMatchSnapshot()
})