// App.test.js
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
    let originalFetch;

    beforeEach(() => {
        originalFetch = global.fetch;
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve([
                        {
                            userId: 1,
                            id: 1,
                            title: "delectus aut autem",
                            completed: false,
                        },
                    ]),
            })
        );
    });

    afterEach(() => {
        global.fetch = originalFetch;
    });

    it("renders App component", async () => {
        render(<App />);
        const linkElement = await screen.findByText(/delectus aut autem/i);
        expect(linkElement).toBeInTheDocument();
    });
});