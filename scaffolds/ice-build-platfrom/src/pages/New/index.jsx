import React, { useState, useRef } from 'react';
import IceContainer from '@icedesign/container';
import {
  Input,
  Button,
  Select,
  DatePicker,
  Radio,
  Message,
} from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import { withRouter } from 'react-router-dom';
import styles from './index.module.scss';

const { Option } = Select;
const { Group: RadioGroup } = Radio;

const New = (props) => {
  const [status, setStatus] = useState('pending');
  const form = useRef(null);

  function formChange(value) {
    setStatus(value.status);
  }

  function validateAllFormField() {
    form.current.validateAll((errors, values) => {
      if (errors) {
        Message.error('请填写完整的信息');
        return;
      }
      Message.success('添加完成');
      console.log({ values });
      props.history.push('/');
    });
  }

  return (
    <IceContainer className={styles.container}>
      <div className={styles.title}>添加构建器</div>
      <IceFormBinderWrapper
        value={{ status }}
        onChange={formChange}
        ref={form}
      >
        <div className={styles.formContent}>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>
              名称
            </div>
            <IceFormBinder
              name="name"
              required
              triggerType="onBlur"
              message="名称不能为空"
            >
              <Input
                placeholder="请输入名称"
                style={{ width: '400px' }}
              />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="name" />
            </div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>
              版本
            </div>
            <IceFormBinder
              name="version"
              required
              triggerType="onBlur"
              message="版本不能为空"
            >
              <Input
                placeholder="1.0.0"
                style={{ width: '400px' }}
              />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="version" />
            </div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>
              类别
            </div>
            <IceFormBinder name="cate">
              <Select
                placeholder="请选择"
                mode="multiple"
                style={{ width: '400px' }}
              >
                <Option value="technology">
                  Java
                </Option>
                <Option value="professional">
                  Node
                </Option>
                <Option value="management">
                  Python
                </Option>
                <Option value="other">
                  其他
                </Option>
              </Select>
            </IceFormBinder>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>
              负责人
            </div>
            <IceFormBinder
              name="person"
              required
              triggerType="onBlur"
              message="负责人不能为空"
            >
              <Input
                placeholder="请输入"
                style={{ width: '400px' }}
              />
            </IceFormBinder>
            <div className={styles.formError}>
              <IceFormError name="person" />
            </div>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>
              时间
            </div>
            <IceFormBinder name="time">
              <DatePicker style={{ width: '400px' }} />
            </IceFormBinder>
          </div>
          <div className={styles.formItem}>
            <div className={styles.formLabel}>
              状态
            </div>
            <IceFormBinder name="status">
              <RadioGroup
                dataSource={[
                  {
                    value: '1',
                    label: '发布中',
                  },
                  {
                    value: '2',
                    label: '未发布',
                  },
                  {
                    value: '3',
                    label: '定时发布',
                  },
                  {
                    value: '4',
                    label: '已发布',
                  },
                ]}
              />
            </IceFormBinder>
          </div>
          <Button
            type="primary"
            className={styles.submitButton}
            onClick={validateAllFormField}
          >
            提 交
          </Button>
        </div>
      </IceFormBinderWrapper>
    </IceContainer>
  );
};
New.displayName = 'New';

export default withRouter(New);
