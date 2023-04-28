import { LogicalOperatorFilter, LogicalOperatorFilterType } from "./filters/LogicalOperatorFilter";
import {Option, OptionType} from "./Option";
import { OptionsBuilder } from "./OptionsBuilder"
import {Custom} from "./Custom";

/**
 * Options
 */
export class Options {

    private readonly options: Option[];

    /**
     * Options Constructor
     *
     * @param options list of options
     */
    constructor(options?: Option[]) {
        if (options) {
            this.options = options;
        } else {
            this.options = []
        }
    }

    /**
     * Options List to Map
     *
     * @return Map of Options
     */
    public toMap() {
        const optionList: Option[] = [];
        const filters: Option[] = [];
        for (const option of this.options) {
            if (option.getOptionType() === OptionType.FILTER) {
                filters.push(option);
            } else {
                optionList.push(option);
            }
        }
        if (filters.length >= 2) {
            optionList.push(LogicalOperatorFilter.of(LogicalOperatorFilterType.AND, ...filters));
        } else if (filters.length === 1) {
            optionList.push(filters[0]);
        }
        return Object.fromEntries(optionList.map(option => [option.getOptionTypeValue(), option.getValue()]))
    }

    /**
     * OptionsBuilder.builder
     *
     * @return new OptionsBuilder
     */
    public static builder(): OptionsBuilder {
        return new OptionsBuilder();
    }

    public getOptions(): Option[] {
        return this.options
    }

    public addCustomOption(key: string, value: string) {
        this.options.push(new Custom(key, value))
    }
}