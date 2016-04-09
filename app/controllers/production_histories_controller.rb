class ProductionHistoriesController < HistoriesController
  def show
  end

  private

  def history_params
    if params[:production_history].present?
      params[:production_history].permit(:happened_at)
    else
      {}
    end
  end
end
