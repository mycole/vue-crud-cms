<template>
  <crud
    :prefix="prefix"
    :path="path"
    :page-title="pageTitle"
    :fields-info="fieldsInfo"
    :details-title="$t('detailsTitle')"
  >
  </crud>
</template>

<script>
import Crud from '@/utils/crud/components/Crud.vue'

export default {
  data () {
    return {
      prefix: 'crud/crm',
      path: 'contact-types',
      pageTitle: 'crm.contactTypes',
    }
  },
  computed: {
    fieldsInfo () {
      return [
        {
          text: this.$t('fields.id'),
          name: 'id',
          details: false,
        },
        {
          type: 'input',
          column: 'name',
          text: this.$t('fields.name'),
          name: 'name',
          multiedit: false,
        },
        {
          type: 'input',
          column: 'code',
          text: this.$t('fields.code'),
          name: 'code',
          multiedit: false,
        },
      ]
    },
  },
  components: {
    Crud,
  },
  i18n: {
    messages: {
      pl: {
        detailsTitle: 'Typ firmy',
        fields: {
          id: 'Id',
          name: 'Nazwa',
          code: 'Kod',
        },
      },
      en: {
        detailsTitle: 'Contact type',
        fields: {
          id: 'Id',
          name: 'Name',
          code: 'Code',
        },
      },
    },
  },
}

</script>
