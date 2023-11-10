/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GroupCreateFormInputValues = {};
export declare type GroupCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GroupCreateFormOverridesProps = {
    GroupCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type GroupCreateFormProps = React.PropsWithChildren<{
    overrides?: GroupCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GroupCreateFormInputValues) => GroupCreateFormInputValues;
    onSuccess?: (fields: GroupCreateFormInputValues) => void;
    onError?: (fields: GroupCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GroupCreateFormInputValues) => GroupCreateFormInputValues;
    onValidate?: GroupCreateFormValidationValues;
} & React.CSSProperties>;
export default function GroupCreateForm(props: GroupCreateFormProps): React.ReactElement;
