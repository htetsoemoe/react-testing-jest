// App.snapshot.test.js
import renderer from "react-test-renderer";

import App from "./App";

test("renders learn react link", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchInlineSnapshot(`null`);
});