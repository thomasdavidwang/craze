/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Dare } from "../../src/API.ts";
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
export declare type DareUpdateFormInputValues = {
    description?: string;
    emoji?: string;
};
export declare type DareUpdateFormValidationValues = {
    description?: ValidationFunction<string>;
    emoji?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DareUpdateFormOverridesProps = {
    DareUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    emoji?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DareUpdateFormProps = React.PropsWithChildren<{
    overrides?: DareUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dare?: Dare;
    onSubmit?: (fields: DareUpdateFormInputValues) => DareUpdateFormInputValues;
    onSuccess?: (fields: DareUpdateFormInputValues) => void;
    onError?: (fields: DareUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DareUpdateFormInputValues) => DareUpdateFormInputValues;
    onValidate?: DareUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DareUpdateForm(props: DareUpdateFormProps): React.ReactElement;
