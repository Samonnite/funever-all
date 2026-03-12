// form
import { useFormContext, FieldValues } from 'react-hook-form';
// @mui
import { AutocompleteProps } from '@mui/material';
import { isArray } from 'lodash';
import { useCallback, useMemo } from 'react';
import RHFAutocomplete from './RHFAutocomplete';

// ----------------------------------------------------------------------

interface Props<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
  name: string;
  label?: string;
  helperText?: React.ReactNode;
}

export default function RHFQueryAutocomplete<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean
>({
  name,
  field,
  lableKey,
  helperText,
  options,
  handleChange,
  ...other
}: Omit<Props<T, Multiple, DisableClearable, FreeSolo>, 'renderInput' | 'options'> & {
  field?: string;
  lableKey?: string;
  options: any;
  handleChange?: (values: FieldValues) => void;
}) {
  const { setValue, handleSubmit } = useFormContext();
  const isArrayOption = useMemo(() => isArray(options), [options]);

  const currentLabelKey = isArrayOption ? lableKey || name : 'label';
  const currentLabelField = isArrayOption ? field || name : 'value';

  const originOptions = useMemo(() => {
    if (!options) return [];
    return isArrayOption
      ? options
      : Object.entries(options).map((item) => ({
          value: item[0],
          label: item[1],
        }));
  }, [options, isArrayOption]);

  const currentOptions = useMemo(() => {
    if (!options) return [];
    if (isArrayOption) {
      return options.map((item: any) => item?.[currentLabelField]) || [];
    }
    return Object.entries(options).map((item) => item[0]) || [];
  }, [options, isArrayOption, currentLabelField]);

  const optionLabel = useCallback(
    (origin: any) => {
      const option = originOptions?.find((item: any) => item?.[currentLabelField] === origin);
      if (option) {
        return option?.[currentLabelKey];
      }
      return '';
    },
    [currentLabelField, currentLabelKey, originOptions]
  );

  return (
    <RHFAutocomplete
      name={name}
      options={currentOptions}
      getOptionLabel={optionLabel}
      onChange={(e, value, reason) => {
        if (value) {
          setValue(name, value);
        }
        if (reason === 'clear') {
          setValue(name, undefined);
        }
        handleSubmit((data) => handleChange?.(data))();
      }}
      sx={{ width: 160 }}
      {...other}
    />
  );
}
