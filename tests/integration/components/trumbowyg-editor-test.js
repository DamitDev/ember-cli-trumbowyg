import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('trumbowyg-editor', 'Integration | Component | trumbowyg editor', {
  integration: true
});

test('html attr', function(assert) {
  this.set('html', 'foo');
  this.render(hbs`
    {{trumbowyg-editor html=html}}
  `);

  assert.equal(this.$('.trumbowyg-editor').text().trim(), 'foo');

  this.set('html', 'bar');

  assert.equal(this.$('.trumbowyg-editor').text().trim(), 'bar');
});

test('placeholder attr', function(assert) {
  this.set('placeholder', 'foo');
  this.render(hbs`
    {{trumbowyg-editor placeholder=placeholder}}
  `);

  assert.equal(this.$('.trumbowyg-editor').attr('placeholder'), 'foo');

  this.set('placeholder', 'bar');

  assert.equal(this.$('.trumbowyg-editor').attr('placeholder'), 'bar');
});

test('disabled attr', function(assert) {
  this.set('disabled', true);
  this.render(hbs`
    {{trumbowyg-editor disabled=disabled}}
  `);

  assert.equal(this.$('.trumbowyg-editor').attr('contenteditable'), 'false');

  this.set('disabled', false);

  assert.equal(this.$('.trumbowyg-editor').attr('contenteditable'), 'true');
});

test('lang attr', function(assert) {
  this.set('lang', 'hu');
  this.render(hbs`
    {{trumbowyg-editor lang=lang}}
  `);

  assert.ok(this.$('.trumbowyg').hasClass('trumbowyg-hu'));

  this.set('lang', 'en');

  assert.ok(this.$('.trumbowyg').hasClass('trumbowyg-en'));
});
