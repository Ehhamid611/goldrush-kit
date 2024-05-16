import {
    type Chain,
    type NftCollectionAttribute,
} from "@covalenthq/client-sdk";
import { type GRK_SIZES } from "../constants/shared.constants";

export interface AddressCardProps {
    label?: string | null;
    address: string;
    type?: "fingerprint" | "effigy" | "wallet";
    show_copy_icon?: boolean;
    show_qr_code?: boolean;
}

export interface AddressProps {
    address: string;
    label?: string | null;
    show_copy_icon?: boolean;
}

export interface NFTProps {
    collection_name?: string | null;
    token_id?: string | number | bigint | null;
    src: string | null;
    attributes?: NftCollectionAttribute[];
    children?: React.ReactNode;
    chain_name?: Chain;
}

export interface TimestampProps {
    timestamp: string | Date;
    defaultType?: "relative" | "descriptive";
}

export interface AddressAvatarProps {
    address: string;
    type: "fingerprint" | "effigy" | "wallet" | "nft";
    size: GRK_SIZES;
    rounded?: boolean;
    fallback?: string;
    class_name?: string;
    custom_avatar?: string;
}

export interface BalancePriceDeltaProps {
    numerator: number;
    denominator: number;
}

export interface CopyImageProps {
    url: string;
}

export interface IconWrapperPropsType {
    class_name?: string;
    icon_class_name?: string;
    on_click?: (e?: React.MouseEvent<HTMLDivElement>) => void;
    icon_size?: string;
    icon_type?: string;
}

export interface NetPriceDeltaProps {
    numerator: number;
    denominator: number;
}

export interface TokenAvatarProps {
    token_url?: string | null;
    sub_url?: string | null;
    size: GRK_SIZES;
    is_chain_logo?: boolean;
    chain_color?: string | null;
}
