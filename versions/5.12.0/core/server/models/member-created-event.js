const errors = require('@tryghost/errors');
const ghostBookshelf = require('./base');

const MemberCreatedEvent = ghostBookshelf.Model.extend({
    tableName: 'members_created_events',

    member() {
        return this.belongsTo('Member', 'member_id', 'id');
    },

    postAttribution() {
        return this.belongsTo('Post', 'attribution_id', 'id');   
    },

    userAttribution() {
        return this.belongsTo('User', 'attribution_id', 'id');   
    },

    tagAttribution() {
        return this.belongsTo('Tag', 'attribution_id', 'id');   
    }
}, {
    async edit() {
        throw new errors.IncorrectUsageError({message: 'Cannot edit MemberCreatedEvent'});
    },

    async destroy() {
        throw new errors.IncorrectUsageError({message: 'Cannot destroy MemberCreatedEvent'});
    }
});

module.exports = {
    MemberCreatedEvent: ghostBookshelf.model('MemberCreatedEvent', MemberCreatedEvent)
};
