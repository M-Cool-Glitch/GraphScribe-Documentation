import DefaultTheme from 'vitepress/theme'
import { createApp, h, nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import ImageDialog from './ImageDialog.vue'
import { imageDialogState, openImageDialog, closeImageDialog } from './imageDialog.js'
import './custom.css'

function wrapContentImages() {
  document.querySelectorAll('.main img').forEach((img) => {
    if (img.closest('.gs-image-wrap')) return
    const wrap = document.createElement('span')
    wrap.className = 'gs-image-wrap'
    img.parentNode.insertBefore(wrap, img)
    wrap.appendChild(img)
  })
}

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()

    onMounted(() => {
      const host = document.createElement('div')
      document.body.appendChild(host)
      createApp(() =>
        h(ImageDialog, { state: imageDialogState, onClose: closeImageDialog })
      ).mount(host)

      wrapContentImages()

      document.addEventListener('click', (event) => {
        const img = event.target.closest('.main img')
        if (!img) return
        event.preventDefault()
        openImageDialog(img.currentSrc || img.src, img.alt || '')
      })
    })

    watch(
      () => route.path,
      () => {
        closeImageDialog()
        nextTick(() => wrapContentImages())
      }
    )
  }
}
