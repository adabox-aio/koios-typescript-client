import {Option} from "./Option";
import {Options} from "./Options";

/**
 * Options Builder
 */
export class OptionsBuilder {

    private opts: Option[] = [];

    /**
     * option
     * Add new Option to OptionBuilder
     *
     * @param option option to add
     * @return OptionsBuilder
     */
    public option(option: Option): OptionsBuilder {
        if (!this.opts) {
            this.opts = [];
        }
        this.opts.push(option);
        return this;
    }

    /**
     * options
     * Add new Options to OptionBuilder
     *
     * @param options options to add
     * @return OptionsBuilder
     */
    public options(options: Option[]): OptionsBuilder {
        if (!this.opts) {
            this.opts = [];
        }
        this.opts.push(...options);
        return this;
    }

    /**
     * Build OptionsBuilder Object
     *
     * @return Options
     */
    public build(): Options {
        return new Options(this.opts);
    }
}