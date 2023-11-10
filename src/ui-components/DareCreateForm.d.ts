/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type DareCreateFormInputValues = {
    description?: string;
    emoji?: string;
};
export declare type DareCreateFormValidationValues = {
    description?: ValidationFunction<string>;
    emoji?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DareCreateFormOverridesProps = {
    DareCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    emoji?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DareCreateFormProps = React.PropsWithChildren<{
    overrides?: DareCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DareCreateFormInputValues) => DareCreateFormInputValues;
    onSuccess?: (fields: DareCreateFormInputValues) => void;
    onError?: (fields: DareCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DareCreateFormInputValues) => DareCreateFormInputValues;
    onValidate?: DareCreateFormValidationValues;
} & React.CSSProperties>;
export default function DareCreateForm(props: DareCreateFormProps): React.ReactElement;
