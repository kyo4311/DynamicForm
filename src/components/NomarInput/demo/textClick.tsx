/**
 * title: 基础 输入框
 * desc: 存在文本点击事件
 */
import React, { FC } from 'react';
import { List } from 'antd-mobile';
import Form from 'rc-field-form';
import NomarInput from '..';

const TextClick: FC = () => (
  <Form>
    <List>
      <NomarInput
        fieldProps="userTitle"
        required
        placeholder="存在点击事件"
        title="标题"
        // eslint-disable-next-line no-console
        onClick={e => console.log(e)}
        editable={false}
      />
    </List>
  </Form>
);

export default TextClick;
