// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSendIbcPost } from "./types/blog/tx";
import { MsgCreateTimedoutPost } from "./types/blog/tx";
import { MsgDeleteTimedoutPost } from "./types/blog/tx";
import { MsgUpdateSentPost } from "./types/blog/tx";
import { MsgUpdatePost } from "./types/blog/tx";
import { MsgDeleteSentPost } from "./types/blog/tx";
import { MsgDeletePost } from "./types/blog/tx";
import { MsgUpdateTimedoutPost } from "./types/blog/tx";
import { MsgCreatePost } from "./types/blog/tx";
import { MsgCreateSentPost } from "./types/blog/tx";
const types = [
    ["/cosmonaut.planet.blog.MsgSendIbcPost", MsgSendIbcPost],
    ["/cosmonaut.planet.blog.MsgCreateTimedoutPost", MsgCreateTimedoutPost],
    ["/cosmonaut.planet.blog.MsgDeleteTimedoutPost", MsgDeleteTimedoutPost],
    ["/cosmonaut.planet.blog.MsgUpdateSentPost", MsgUpdateSentPost],
    ["/cosmonaut.planet.blog.MsgUpdatePost", MsgUpdatePost],
    ["/cosmonaut.planet.blog.MsgDeleteSentPost", MsgDeleteSentPost],
    ["/cosmonaut.planet.blog.MsgDeletePost", MsgDeletePost],
    ["/cosmonaut.planet.blog.MsgUpdateTimedoutPost", MsgUpdateTimedoutPost],
    ["/cosmonaut.planet.blog.MsgCreatePost", MsgCreatePost],
    ["/cosmonaut.planet.blog.MsgCreateSentPost", MsgCreateSentPost],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgSendIbcPost: (data) => ({ typeUrl: "/cosmonaut.planet.blog.MsgSendIbcPost", value: data }),
        msgCreateTimedoutPost: (data) => ({ typeUrl: "/cosmonaut.planet.blog.MsgCreateTimedoutPost", value: data }),
        msgDeleteTimedoutPost: (data) => ({ typeUrl: "/cosmonaut.planet.blog.MsgDeleteTimedoutPost", value: data }),
        msgUpdateSentPost: (data) => ({ typeUrl: "/cosmonaut.planet.blog.MsgUpdateSentPost", value: data }),
        msgUpdatePost: (data) => ({ typeUrl: "/cosmonaut.planet.blog.MsgUpdatePost", value: data }),
        msgDeleteSentPost: (data) => ({ typeUrl: "/cosmonaut.planet.blog.MsgDeleteSentPost", value: data }),
        msgDeletePost: (data) => ({ typeUrl: "/cosmonaut.planet.blog.MsgDeletePost", value: data }),
        msgUpdateTimedoutPost: (data) => ({ typeUrl: "/cosmonaut.planet.blog.MsgUpdateTimedoutPost", value: data }),
        msgCreatePost: (data) => ({ typeUrl: "/cosmonaut.planet.blog.MsgCreatePost", value: data }),
        msgCreateSentPost: (data) => ({ typeUrl: "/cosmonaut.planet.blog.MsgCreateSentPost", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
