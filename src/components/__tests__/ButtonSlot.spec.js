import { expect, describe, it } from "vitest";
import component from '../ButtonSlot.vue';
import { mount } from "@vue/test-utils";

describe('ButtonSlot.vue', () => {
    describe('when mounted', () => {
        it('renders properly', () => {
            const wrapper = mount(component, {});
            expect(wrapper.html()).toContain('button');
        });
    });
});