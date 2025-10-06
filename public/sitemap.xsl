<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <title>XML Sitemap - originary.xyz</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 40px; background: #f5f5f5; }
          .container { max-width: 1200px; margin: 0 auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
          h1 { color: #333; border-bottom: 3px solid #0066cc; padding-bottom: 10px; }
          .info { background: #e7f3ff; padding: 15px; border-radius: 4px; margin: 20px 0; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th { background: #0066cc; color: white; padding: 12px; text-align: left; font-weight: 600; }
          td { padding: 12px; border-bottom: 1px solid #eee; }
          tr:hover { background: #f9f9f9; }
          .url { color: #0066cc; text-decoration: none; }
          .url:hover { text-decoration: underline; }
          .priority { text-align: center; }
          .high { color: #16a34a; font-weight: 600; }
          .medium { color: #ea580c; }
          .low { color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>XML Sitemap</h1>
          <div class="info">
            <strong>This is an XML Sitemap</strong> used to help search engines like Google discover and index pages on originary.xyz.
            Total URLs: <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong>
          </div>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th style="width: 120px;">Last Modified</th>
                <th style="width: 100px;">Change Freq</th>
                <th style="width: 80px;">Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a class="url" href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                  <td><xsl:value-of select="sitemap:changefreq"/></td>
                  <td class="priority">
                    <xsl:attribute name="class">
                      <xsl:choose>
                        <xsl:when test="sitemap:priority &gt;= 0.8">priority high</xsl:when>
                        <xsl:when test="sitemap:priority &gt;= 0.5">priority medium</xsl:when>
                        <xsl:otherwise>priority low</xsl:otherwise>
                      </xsl:choose>
                    </xsl:attribute>
                    <xsl:value-of select="sitemap:priority"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
