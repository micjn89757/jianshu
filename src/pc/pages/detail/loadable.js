import Loadable from 'react-loadable';
import React from "react"

// 异步加载详情页面
const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading: () => <div>正在加载</div>,
});

export default () => <LoadableComponent/>