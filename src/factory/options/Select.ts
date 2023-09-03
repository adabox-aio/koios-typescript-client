import {Option, OptionType} from "./Option";

/**
 * Select
 */
export class Select extends Option {

    private readonly params: string[];

    /**
     * Select Option Constructor
     *
     * @param params Parameters to Select for Output
     */
    constructor(params: string[]) {
        super(OptionType.SELECT);
        this.params = params;
    }

    /**
     * Select.by Static Constructor
     *
     * @param params Parameter to Order By
     * @returns New Select Option Object
     */
    public static by(params: string[]): Select {
        return new Select(params);
    }

    public getValue(): string {
        return this.params.join(",")
    }
}