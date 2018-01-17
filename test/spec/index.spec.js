import { assert } from "chai";
import tst from "../../src/index";

describe("simple test", () => {
    it("should be 42", () => {
        assert.equal(tst, 42);
    });

    it("window should be present", () => {
        assert.notEqual(window, undefined);
    });

    it("document should be present", () => {
        assert.notEqual(window.document, undefined);
    });
});
