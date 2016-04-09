import React from 'react';
import Radium, {Style} from 'radium';
import _ from 'lodash';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import FontIcon from 'material-ui/lib/font-icon';

@Radium
class SearchBar extends React.Component {
  static propTypes = {
    getFarms: React.PropTypes.func.isRequired,
    searchFarms: React.PropTypes.func.isRequired,
    changeFilter: React.PropTypes.func,
    filter: React.PropTypes.number,
    filters: React.PropTypes.array
  };

  constructor (props) {
    super(props);
    this.searchFarms  = _.debounce(query => {
      if (!_.isEmpty(query)) {
        this.props.searchFarms(query);
      } else {
        this.props.getFarms();
      }
    }, 500); // eslint-disable-line no-magic-numbers
    this.query = event => {
      const query = event.target.value;
      this.searchFarms(query);
    };
  }

  styles () {
    return {
      toolbar: {
        display: 'flex',
        backgroundImage: 'url("content/dirt.png")'
      },
      group: {
        display: 'flex',
        flex: '1',
        margin: '0 2rem'
      },
      icon: {
        paddingLeft: 'initial',
        margin: 'auto',
        color: '#fff',
        textShadow: '-1px 1px 2px #666'
      },
      input: {
        marginLeft: '.5rem',
        flex: '1',
        background: 'initial',
        border: 'initial',
        outline: 'none'
      },
      inputText: {
        color: '#fff',
        fontSize: '1rem',
        textShadow: '-1px 1px 2px #666'
      }
    };
  }

  render () {
    return (
      <Toolbar noGutter style={this.styles().toolbar} className="search">
        <Style scopeSelector=".search"
          rules={{
            '::-webkit-input-placeholder': this.styles().inputText,
            ':-moz-placeholder': this.styles().inputText,
            '::-moz-placeholder': this.styles().inputText,
            ':-ms-input-placeholder': this.styles().inputText
          }}
        />
        <ToolbarGroup style={this.styles().group}>
          <i
            style={this.styles().icon}
            className="material-icons"
          >search</i>
          <input type="test"
            style={[this.styles().input, this.styles().inputText]}
            className="search-input"
            placeholder="Search for farms or farmers..."
            onChange={this.query}
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default SearchBar;
