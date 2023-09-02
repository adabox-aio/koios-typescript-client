// import Bottleneck from "bottleneck";

// default values are matching https://api.koios.rest/#overview--limits
// burst 100 reqs/10s with
export const RATE_LIMITER_DEFAULT_CONFIG = {
    reservoir: 1000,
    refreshAmount: 1000,
    refreshInterval: 60 * 1000,
};

export const getLimiter = () => {

    // see Bottleneck docs https://www.npmjs.com/package/bottleneck#constructor=
    // const limiter = new Bottleneck({
    //     /*
    //      * How many jobs can be executed before the limiter stops executing jobs. If reservoir reaches 0,
    //      * no jobs will be executed until it is no longer 0. New jobs will still be queued up.
    //      */
    //     reservoir: RATE_LIMITER_DEFAULT_CONFIG.reservoir,
    //     /*
    //      * The value to set reservoir to when reservoirRefreshInterval is in use.
    //      */
    //     reservoirRefreshAmount: RATE_LIMITER_DEFAULT_CONFIG.refreshAmount,
    //     /*
    //      * Every reservoirRefreshInterval milliseconds,
    //      * the reservoir value will be automatically updated to the value of reservoirRefreshAmount.
    //      * The reservoirRefreshInterval value should be a multiple of 250 (5000 for Clustering).
    //      */
    //     reservoirRefreshInterval: RATE_LIMITER_DEFAULT_CONFIG.refreshInterval,
    // });
    //
    // limiter.on("error", function (error) {
    //     console.error(error);
    // });
    //
    // return limiter;
};
