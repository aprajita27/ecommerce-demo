import React from 'react';
import cssbaseline from '@material-ui/core/cssbaseline'
import TopBar from '../containers/rootPartial/RootComponentContainer'

const Header = (props) => (
    <div>
        <cssbaseline />
        <TopBar children={props.children} />
    </div>
)
export default (Header)