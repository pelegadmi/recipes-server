import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import { Scenario } from '@interfaces/scenario.interface';
import scenarioModel from '@models/scenario.model';
import { CreateScenarioDto } from '@dtos/scenario.dto';

class ScenarioService {
  public scenarios = scenarioModel;

  public async findAllScenarios(): Promise<Scenario[]> {
    const scenarios: Scenario[] = await this.scenarios.find();
    return scenarios;
  }

  public async findScenarioById(scenarioId: string): Promise<Scenario> {
    if (isEmpty(scenarioId)) throw new HttpException(400, 'Scenario id is empty');

    const findScenario: Scenario = await this.scenarios.findOne({ _id: scenarioId });
    if (!findScenario) throw new HttpException(409, "User doesn't exist");

    return findScenario;
  }

  public async createScenario(scenarioDto: CreateScenarioDto): Promise<Scenario> {
    if (isEmpty(scenarioDto)) throw new HttpException(400, 'Scenario Data is empty');

    const findScenario: Scenario = await this.scenarios.findOne({ _id: scenarioDto._id });
    if (findScenario) throw new HttpException(409, `This id ${scenarioDto._id} already exists`);

    return await this.scenarios.create({ scenarioDto });
  }

  public async updateScenario(scenarioId: string, scenarioData: CreateScenarioDto): Promise<Scenario> {
    if (isEmpty(scenarioData)) throw new HttpException(400, 'userData is empty');

    if (scenarioData._id) {
      const findUser: Scenario = await this.scenarios.findOne({ email: scenarioData._id });
      if (findUser && findUser.id != scenarioId) throw new HttpException(409, `This id ${scenarioData._id} already exists`);
    }

    const updateScenarioById: Scenario = await this.scenarios.findByIdAndUpdate(scenarioId, { userData: scenarioData });
    if (!updateScenarioById) throw new HttpException(409, "User doesn't exist");

    return updateScenarioById;
  }

  public async deleteScenario(scenarioId: string): Promise<Scenario> {
    const deleteScenarioById: Scenario = await this.scenarios.findByIdAndDelete(scenarioId);
    if (!deleteScenarioById) throw new HttpException(409, "User doesn't exist");

    return deleteScenarioById;
  }
}

export default ScenarioService;
