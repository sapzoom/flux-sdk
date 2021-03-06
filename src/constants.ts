import BN from "bn.js";

export const PROTOCOL_VIEW_METHODS: string[] = ["get_all_markets","get_fdai_balance", "get_market","get_liquidity", "get_depth" ,"get_market_price", "get_best_prices" ,"get_owner", "get_claimable", "get_fdai_metrics", "get_active_resolution_window", "get_open_orders_len", "get_filled_orders_len", "get_market_volume", "get_market_sell_depth", "get_outcome_share_balance"];
export const PROTOCOL_CHANGE_METHODS: string[] = ["set_fun_token_account_id", "create_market", "claim_fdai", "place_order", "claim_earnings", "resolute_market", "dispute_market", "finalize_market", "withdraw_resolution_stake", "set_test", "add_to_creators_funds", "delete_market", "cancel_order", "claim_affiliate_earnings", "dynamic_market_sell", "init"];
export const TOKEN_VIEW_METHODS: string[] = ['get_total_supply', 'get_balance', 'get_allowance'];
export const TOKEN_CHANGE_METHODS: string[] = ['claim_fdai', 'inc_allowance', 'new'];
export const NULL_CONTRACT: string = 'null_contract.flux-dev';
export const ZERO = new BN("0");
export const MAX_GAS = new BN("300000000000000");
export const STORAGE_DEFAULT = new BN("30000000000000000000000");
export const SHARE_DENOMINATION = new BN("10000000000000000");
