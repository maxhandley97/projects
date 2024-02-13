import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import {describe, it, expect} from "vitest"
import App from "../components/App"
import userEvent from '@testing-library/user-event'

describe('App Component', () => {

    beforeEach(() => {
        let document = render(<App />).container
    })
    it('Renders the Home component', () => {
        // render instance of App component into jsdom, so we have an output to test
        // once rendered, can write testing, establish whether home component was rendered
        expect(document.querySelector('h3')).toHaveTextContent('Journal Entries')
    })
    it('Renders CategorySelection when Create Entry menu item is clicked', async () => {
        await userEvent.click(screen.getByText('Create Entry'))

        expect(document.querySelector('h3')).not.toBeNull()
        expect(document.querySelector('h3')).toHaveTextContent('Please select a category:')
    })
})
