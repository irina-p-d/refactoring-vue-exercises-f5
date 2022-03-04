import { shallowMount } from "@vue/test-utils";
import ExerciseSeventeen from "@/components/exercises/ExerciseSeventeen";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(ExerciseSeventeen);
});

afterEach(() => {
  wrapper.destroy();
});

describe("ExerciseSeventeen", () => {
  it("renders input", () => {
    const input = wrapper.findAll("#age-input");

    expect(input.length).toBe(1);
  });
});
