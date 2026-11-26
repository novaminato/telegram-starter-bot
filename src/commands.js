export function registerCommands(bot) {
  bot.command("start", (ctx) =>
    ctx.reply("🛡 APK Delete Bot ishga tushdi!")
  )

  bot.command("help", (ctx) =>
    ctx.reply("Men APK, XAPK, APKS va AAB fayllarini avtomatik o'chiraman.")
  )

  const blockedExtensions = [".apk", ".xapk", ".apks", ".aab"]

  bot.on("message:document", async (ctx) => {
    const file = ctx.message.document
    const filename = (file.file_name || "").toLowerCase()

    if (blockedExtensions.some(ext => filename.endsWith(ext))) {
      try {
        await ctx.deleteMessage()
        console.log(`[DELETED] ${filename}`)
      } catch (error) {
        console.error("[DELETE ERROR]", error)
      }
    }
  })
}
