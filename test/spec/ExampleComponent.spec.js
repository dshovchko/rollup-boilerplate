import chai from "chai";
import React from "react";
import ReactTestUtils from "react-dom/test-utils";

import ExampleComponent from "../../src/ExampleComponent";

const assert = chai.assert;

describe("<ExampleComponent />", () => {
    
    it("ExampleComponent type", () => {
        assert.isTrue(ReactTestUtils.isElementOfType(<ExampleComponent />, ExampleComponent));
    });

    it("ExampleComponent isn't composite component", () => {
        assert.isFalse(ReactTestUtils.isCompositeComponent(<ExampleComponent />));
    });

    it("ExampleComponent header", () => {

        const component = ReactTestUtils.renderIntoDocument(<ExampleComponent name="Guest" />);
        
        const h = ReactTestUtils.findRenderedDOMComponentWithTag(component, "h3");
        assert.equal(h.textContent, "Hello, Guest!");
    });

    it("ExampleComponent default name", () => {
        const component = ReactTestUtils.renderIntoDocument(<ExampleComponent />);
        
        const h = ReactTestUtils.findRenderedDOMComponentWithTag(component, "h3");
        assert.equal(h.textContent, "Hello, stranger!");
    });

    it("ExampleComponent body", () => {

        const component = ReactTestUtils.renderIntoDocument(<ExampleComponent />);
        
        const p = ReactTestUtils.findRenderedDOMComponentWithTag(component, "p");
        assert.equal(p.textContent, "It is example component.");
    });

});
