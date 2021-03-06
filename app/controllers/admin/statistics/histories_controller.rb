module Admin
  module Statistics
    class HistoriesController < BaseController
      def creations
        @history_creations = ::Statistics::Chartjs::HistoryCreations.new(Date.today - 1.month, Date.today)
      end
    end
  end
end
