import React from 'react';
import classSet from 'classnames';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class BootstrapTable extends React.Component{
  componentDidMount(){
    this.refs.table.getDOMNode().childNodes[0].childNodes[0].style.width =
      this.refs.table.getDOMNode().childNodes[1].childNodes[0].offsetWidth-1+"px";
  }

  render(){
    var style = {
      height: this.props.height
    };

    var columns = this.props.children.map(function(column, i){
      return {name: column.props.dataField, index: i};
    });

    return(
      <div ref="table" style={style}>
        <TableHeader>
          {this.props.children}
        </TableHeader>
        <TableBody data={this.props.data} columns={columns}/>
      </div>
    )
  }
}
BootstrapTable.propTypes = {
  height: React.PropTypes.string,
  data: React.PropTypes.array
};
BootstrapTable.defaultProps = {
  height: "100%"
};

export default BootstrapTable;