(function() {
  'use strict';

  class StoryBox extends React.Component {
    getInitialState() {
      return {
        items: []
      };
    }

    addItem() {

    }

    render() {
      var name;
      var time;
      var items;

      var { name, time, items } = this.props;

      return(
        <div>
          <h3>{name}</h3>
          <p className="lead">
            Current time: {time}
          </p>
          <form>
            <input type="text" /><button type="submit">Add Item</button>
          </form>
          <ul>
            {items.map(item => <li>{item}</li> )}
          </ul>
        </div>
      );
    }
  }

  var props = {
    name:"Stories App",
    time:new Date().toTimeString(),
    items: ['HTML', 'JavaScript', 'React']
  };

  ReactDOM.render(
    <StoryBox {...props} />, document.getElementById('story-app')
  );
})();
