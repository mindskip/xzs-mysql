<template>
    <view class="i-class i-cell-group">
        <slot></slot>
    </view>
</template>

<script>
export default {
    data() {
        return {};
    },
    externalClasses: ['i-class'],
    relations: {
        '../cell/index': {
            type: 'child',

            linked() {
                this._updateIsLastCell();
            },

            linkChanged() {
                this._updateIsLastCell();
            },

            unlinked() {
                this._updateIsLastCell();
            }
        }
    },
    methods: {
        _updateIsLastCell() {
            let cells = this.getRelationNodes('../cell/index');
            const len = cells.length;

            if (len > 0) {
                let lastIndex = len - 1;
                cells.forEach((cell, index) => {
                    cell.updateIsLastCell(index === lastIndex);
                });
            }
        }
    }
};
</script>
<style>
@import './index.css';
</style>
