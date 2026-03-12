import {
  getGetConfigTaskQueryKey,
  useUpdateConfigTask,
  useGetConfigTask,
  useUpdateConfigTask1,
} from 'api';
import { useInvalidate } from 'hooks/useInvalidate';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';

export const useTaskEditForm = (defaultValue?: any) => {
  const form = useForm<any>({
    mode: 'all',
    defaultValues: {
      rewardCoin: '',
      rewardPoint: '',
      taskName: '',
      taskLogo: '',
      taskTarget: '',
      taskType: 'target',
      dayRepeat: true,
      minDelay: '',
    },
    resolver: yupResolver(
      yup.object().shape({
        rewardCoin: yup.number().required().typeError('请输入数字'),
        rewardPoint: yup.number().required().typeError('请输入数字'),
        minDelay: yup.number().required().typeError('请输入数字'),
        taskName: yup.string().required(),
        taskLogo: yup.string().required(),
        taskType: yup.string().required(),
      })
    ),
  });
  const { setValue } = form;

  useEffect(() => {
    if (defaultValue) {
      setValue('rewardCoin', defaultValue?.rewardCoin);
      setValue('rewardPoint', defaultValue?.rewardPoint);
      setValue('minDelay', defaultValue?.minDelay);
      setValue('taskName', defaultValue?.taskName);
      setValue('taskLogo', defaultValue?.taskLogo);
      setValue('taskTarget', defaultValue?.taskTarget);
      setValue('taskType', defaultValue?.taskType);
      setValue('dayRepeat', Number(defaultValue?.dayRepeat));
    }
  }, [defaultValue, setValue]);

  return {
    ...form,
  };
};

export const SystemTaskModel = (() => ({
  useInvalidateTask() {
    const invalidate = useInvalidate();
    return () => invalidate(...getGetConfigTaskQueryKey());
  },
  useSystemTask() {
    const { data: res, ...result } = useGetConfigTask();
    return {
      systemTask: res?.data,
      ...result,
    };
  },
  useAddTask() {
    const invalidate = this.useInvalidateTask();
    const { mutateAsync: addTask, ...result } = useUpdateConfigTask({
      mutation: {
        onSuccess() {
          invalidate();
        },
      },
    });
    return {
      addTask,
      ...result,
    };
  },
  useUpdateTask() {
    const invalidate = this.useInvalidateTask();
    const { mutateAsync: updateTask, ...result } = useUpdateConfigTask({
      mutation: {
        onSuccess() {
          invalidate();
        },
      },
    });
    return {
      updateTask,
      ...result,
    };
  },
  useDeleteTask() {
    const invalidate = this.useInvalidateTask();
    const { mutateAsync: deleteTask, ...result } = useUpdateConfigTask1({
      mutation: {
        onSuccess() {
          invalidate();
        },
      },
    });
    return {
      deleteTask,
      ...result,
    };
  },
}))();
