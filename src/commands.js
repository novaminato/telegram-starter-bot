export function registerCommands(bot) {
  bot.command("start", (ctx) =>
    ctx.reply("🛡 APK Delete Bot ishga tushdi!")
  )

  bot.command("help", (ctx) =>
    ctx.reply("Men guruhdagi APK fayllarni avtomatik o‘chiraman.")
  )

  const blockedExtensions = [".apk", ".xapk", ".apks", ".aab"]

  bot.on("message:document", async (ctx) => {
    const file = ctx.message.document
    const filename = file.file_name || ""

    const isBlocked = blockedExtensions.some(ext =>
      filename.toLowerCase().endsWith(ext)
    )

    if (isBlocked) {
      try {
        await ctx.deleteMessage()
        console.log(`[DELETED] ${filename}`)
      } catch (error) {
        console.error("Delete error:", error)
      }
    }
  })
}

