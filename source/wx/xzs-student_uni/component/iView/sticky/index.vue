<template>
    <view class="i-sticky i-class">
        <slot></slot>
    </view>
</template>

<script>
export default {
    data() {
        return {
            timer: null,
            itemLength: 0
        };
    },
    externalClasses: ['i-class'],
    props: {
        scrollTop: {
            type: Number
        }
    },
    relations: {
        '../sticky-item/index': {
            type: 'child',

            linked() {
                this._updateDataChange();
            },

            linkChanged() {
                this._updateDataChange();
            },

            unlinked() {
                this._updateDataChange();
            }
        }
    },
    methods: {
        _updateScrollTopChange() {
            const stickies = this.getRelationNodes('../sticky-item/index');

            if (stickies.length > 0) {
                stickies.forEach((item) => {
                    if (item) {
                        item.updateScrollTopChange(this.scrollTop);
                    }
                });
            }
        },

        _updateDataChange() {
            const stickies = this.getRelationNodes('../sticky-item/index');

            if (stickies.length > 0) {
                if (this.timer) {
                    clearTimeout(this.timer);
                    this.setData({
                        timer: null
                    });
                }

                this.timer = setTimeout(() => {
                    stickies.forEach((item, index) => {
                        if (item) {
                            item.updateDataChange(index);
                        }
                    });
                }, 0);
                this.setData({
                    timer: this.timer
                });
            }
        }
    },
    watch: {
        scrollTop: {
            handler: function (val) {
                this._updateScrollTopChange();
            },

            immediate: true
        }
    }
};
</script>
<style>
@import './index.css';
</style>
