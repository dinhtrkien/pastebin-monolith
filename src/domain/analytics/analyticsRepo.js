// Implementation of Analytics repository
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Chuẩn hóa `dateBucket` về đầu ngày (00:00:00)
 */
const getTodayBucket = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate()); // YYYY-MM-DD 00:00:00
};

class AnalyticsRepository {
  /**
   * Tăng lượt xem cho pasteId vào ngày hiện tại
   */
  async incrementViewCount(pasteId) {
    const dateBucket = getTodayBucket();

    const existingEntry = await prisma.analytics.findFirst({
      where: { pasteId, dateBucket },
    });

    if (existingEntry) {
      return await prisma.analytics.update({
        where: { id: existingEntry.id },
        data: { views: { increment: 1 } },
      });
    } else {
      return await prisma.analytics.create({
        data: { pasteId, dateBucket, views: 1 },
      });
    }
  }

  /**
   * Lấy tổng số lượt xem theo tháng và trả về ngày có lượt xem cao nhất
   */
  async getMonthlyAnalytics(pasteId, year, month) {
    const startDate = new Date(year, month - 1, 1); // Ngày đầu tháng
    const endDate = new Date(year, month, 0); // Ngày cuối tháng

    // Lấy dữ liệu lượt xem theo ngày trong tháng
    const analytics = await prisma.analytics.findMany({
      where: {
        pasteId,
        dateBucket: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: { dateBucket: 'asc' },
    });

    // Tìm ngày có lượt xem nhiều nhất
    let maxViews = 0;
    let mostViewedDay = null;

    analytics.forEach(({ dateBucket, views }) => {
      if (views > maxViews) {
        maxViews = views;
        mostViewedDay = dateBucket;
      }
    });

    return {
      analytics,
      mostViewedDay,
      maxViews,
    };
  }
}

module.exports = new AnalyticsRepository();
