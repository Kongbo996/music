import React from 'react';
import * as actions from './store/actionCreators';
import { defaultState } from './store/reducer'
import { connect } from 'react-redux';

interface data {
  name: string;
}
const list = [
  { name: 'abc'}
]
export interface Props {
  singerList: data[],
  changeSingersList:(data: data[]) => void
}
class Singers extends React.Component<Props> {
  render() {
    const { singerList, changeSingersList } = this.props;
    console.log(singerList)
    return <div onClick={() => { changeSingersList(list); console.log(this.props.singerList)} }>Singers</div>;
    
  }
}

export function mapStateToProps({ singerList }: defaultState) {
  return {
    singerList,
  }
}

export function mapDispatchToProps(dispatch: any) {
  return {
    changeSingersList: (data: data[]) => dispatch(actions.changeSingersList(data)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Singers);
