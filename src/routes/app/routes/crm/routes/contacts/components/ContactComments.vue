<template>
  <div>
      <contact-comments-table
        :title="$t('global.routes.crm.companyComments')"
        :fields-info="fileteredTableFields"
        :details-loader="detailsLoader"
        :table-data="childrenList(fileteredTableFields, [], 'id', childItemName, 'active')"
        delete-mode="soft"
      ></contact-comments-table>
      <contact-comment-details
        :details="details"
        :fields-info="fileteredDetailsFields"
      ></contact-comment-details>
  </div>
</template>

<script>
import FieldsInfoMixin from '../../contact-comments/mixins/fields'
import LocalesMixin from '../../contact-comments/mixins/locales'
import ContactCommentsChildMixin from '@/utils/crud/mixins/child'
import ChildrenTable from '@/utils/crud/components/ChildrenTable.vue'
import ChildDetails from '@/utils/crud/components/ChildDetails.vue'

export default {
  mixins: [
    FieldsInfoMixin,
    LocalesMixin,
    ContactCommentsChildMixin,
  ],
  components: {
    'contact-comments-table': ChildrenTable,
    'contact-comment-details': ChildDetails,
  },
}
</script>
