import './HeroImage.html';

Template.HeroImage.onCreated(function heroImageOnCreated() {
  this.heroSettings = this.data.heroSettings;
  this.layoutArray = this.heroSettings.layout.split(',');
  this.columns = this.layoutArray.map((val, i) => {
    let column = {
      span: val,
      content: false
    };

    if(i === this.heroSettings.contentColumn - 1) {
      column.content = this.heroSettings.content;
    }

    return column;
  }, this);
});

Template.HeroImage.helpers({
  heroId() {
    return Template.instance().heroSettings.id;
  },
  heroColumns() {
    return Template.instance().columns;
  }
});

// helpers specifically for the HeroImageColumn template
Template.HeroImageColumn.helpers({
  willColumnHide(showContent) {
    return showContent === false ? 'hidden-xs hidden-sm' : '';
  }
});
